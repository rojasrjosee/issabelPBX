<?php 
if (!defined('ISSABELPBX_IS_AUTH')) { die('No direct script access allowed'); }
$tabindex = 0;
$type              = isset($_REQUEST['type'])        ? $_REQUEST['type']        : 'setup';
$action            = isset($_REQUEST['action'])      ? $_REQUEST['action']      :  '';
$id                = isset($_REQUEST['id'])          ? $_REQUEST['id']          :  false;
$name              = isset($_REQUEST['name'])        ? $_REQUEST['name']        :  '';
$dtmf              = isset($_REQUEST['dtmf'])        ? $_REQUEST['dtmf']        :  '';
$activate_on       = isset($_REQUEST['activate_on']) ? $_REQUEST['activate_on'] :  '';
$application       = isset($_REQUEST['application']) ? $_REQUEST['application'] :  '';
$arguments         = isset($_REQUEST['arguments'])   ? $_REQUEST['arguments']   :  '';
$moh_class         = isset($_REQUEST['moh_class'])   ? $_REQUEST['moh_class']   :  '';

if (isset($_REQUEST['delete'])) $action = 'delete'; 

switch ($action) {
    case 'add':
        $_REQUEST['extdisplay'] = dynamicfeatures_add($name, $dtmf, $activate_on, $application, $arguments, $moh_class);
        needreload();
        $_SESSION['msg']=base64_encode(_dgettext('amp','Item has been added'));
        $_SESSION['msgtype']='success';
        $_SESSION['msgtstamp']=time();
        redirect_standard();
    break;
    case 'edit':
        dynamicfeatures_edit($id, $name, $dtmf, $activate_on, $application, $arguments, $moh_class);
        needreload();
        $_SESSION['msg']=base64_encode(_dgettext('amp','Item has been saved'));
        $_SESSION['msgtype']='success';
        $_SESSION['msgtstamp']=time();
        redirect_standard('extdisplay');
    break;
    case 'delete':
        dynamicfeatures_delete($id);
        needreload();
        $_SESSION['msg']=base64_encode(_dgettext('amp','Item has been deleted'));
        $_SESSION['msgtype']='warning';
        $_SESSION['msgtstamp']=time();
        redirect_standard();
    break;
}

$rnavitems = array();
$dynfeat   = dynamicfeatures_list();
foreach ($dynfeat as $row) {
    $rnavitems[]=array($row['id'],$row['name'],$row['dtmf'],'');
}
drawListMenu($rnavitems, $type, $display, $extdisplay);
?> 
<div class='content'>
<?php

if ($extdisplay) {
    // load
    $row = dynamicfeatures_get($extdisplay);
    
    $name        = $row['name'];
    $dtmf        = $row['dtmf'];
    $activate_on = $row['activate_on'];
    $application = $row['application'];
    $arguments   = $row['arguments'];
    $moh_class   = $row['moh_class'];
}

$helptext = __("Dynamic Features allow you to define custom feature codes  mapped to Asterisk applications. In this way you can trigger some action over an active call by dialing the configured feature code");
$help = '<div class="infohelp">?<span style="display:none;">'.$helptext.'</span></div>';

echo "<div class='is-flex'><h2>".($extdisplay ? __('Edit Dynamic Feature').': '.$description : __("Add Dynamic Feature"))."</h2>$help</div>\n";
?>

<form id="mainform" name="editDynamicFeature" action="<?php  $_SERVER['PHP_SELF'] ?>" method="post" onsubmit="return checkDynamicFeature(this);">
    <input type="hidden" name="extdisplay" value="<?php echo $extdisplay; ?>">
    <input type="hidden" name="id" value="<?php echo $extdisplay; ?>">
    <input type="hidden" name="action" value="<?php echo ($extdisplay ? 'edit' : 'add'); ?>">
    <table class='table is-borderless is-narrow'>
    <tr><td colspan="2"><h5><?php echo _dgettext('amp','General Settings');?></h5></td></tr>
    <tr>
        <td><a href="#" class="info"><?php echo __("Name")?><span><?php echo __("The descriptive name of this dynamic feature. For example \"playback_rules\"")?></span></a></td>
        <td><input autofocus type="text" name="name" value="<?php  echo $name; ?>" tabindex="<?php echo ++$tabindex;?>" class='input w100'></td>
    </tr>

    <tr>
        <td><a href="#" class="info"><?php echo __("DTMF")?><span><?php echo __("The DTMF sequence to trigger this dynamic feature")?></span></a></td>
        <td><input type="text" name="dtmf" value="<?php echo $dtmf; ?>"  tabindex="<?php echo ++$tabindex;?>" class='input w100'/></td> 
    </tr>

    <tr>
        <td><a href="#" class="info"><?php echo __("Activate On")?><span><?php echo __("On what leg to execute the application, could be set to 'self' or 'peer'")?></span></a></td>
        <td>
            <select name="activate_on"  tabindex="<?php echo ++$tabindex;?>" class='componentSelect'/>
                <option value='self' <?php if($activate_on=='self') echo  " selected "; ?>>self</option>
                <option value='peer' <?php if($activate_on=='peer') echo  " selected "; ?>>peer</option>
            </select>
        </td> 
    </tr>

    <tr>
        <td><a href="#" class="info"><?php echo __("Application")?><span><?php echo __("The application to run")?></span></a></td>
        <td><input type="text" name="application" value="<?php echo $application; ?>"  tabindex="<?php echo ++$tabindex;?>" class='input w100'/></td> 
    </tr>

    <tr>
        <td><a href="#" class="info"><?php echo __("Arguments")?><span><?php echo __("Arguments to pass to the application")?></span></a></td>
        <td><input type="text" name="arguments" value="<?php echo $arguments; ?>"  tabindex="<?php echo ++$tabindex;?>" class='input w100'/></td> 
    </tr>

    <tr>
        <td><a href="#" class="info"><?php echo __("Music on Hold")?><span><?php echo __("Music on Hold class to play to other leg while application is being run")?></span></a></td>
        <td>
            <select name="moh_class" tabindex="<?php echo ++$tabindex;?>" class='componentSelect'>
            <?php
            $tresults = music_list();
            $cur = (isset($moh_class) && $moh_class != "" ? $moh_class : 'default');
            if (isset($tresults[0])) {
                foreach ($tresults as $tresult) {
                   ($tresult == 'none' ? $ttext = __("No Music") : $ttext = $tresult);
                   ($tresult == 'default' ? $ttext = __("Default") : $ttext = $tresult);
                   echo '<option value="'.$tresult.'"'.($tresult == $cur ? ' SELECTED' : '').'>'.__($ttext)."</option>\n";
                }
            }
            ?>
            </select>
       </td>
    </tr>

</table>
</form>

<script>

function checkDynamicFeature(theForm) {
    var msgInvalidDescription = "<?php echo __('Invalid name specified'); ?>";

    // form validation
    defaultEmptyOK = false;    
    if (isEmpty(theForm.name.value))
        return warnInvalid(theForm.name, msgInvalidDescription);

    $.LoadingOverlay('show');
    return true;
}
<?php echo js_display_confirmation_toasts(); ?>
</script>
</div> <!-- end div content, be sure to include script tags before -->
<?php echo form_action_bar($extdisplay); ?>
