<?php
include 'ContactFormulaire.php';
$contact = new ContactFormulaire();
if(isset($_POST['nom'])){
    print_r($contact->loadForm($_POST));
}
?>
<?php /* FORMULAIRE DEBUT */ ?>

<form method="post">
  <table width="44%" height="317" border="0">
    <tr>
      <td width="14%" align="left" valign="middle">
	      <font size="3" face="Verdana, Arial, Helvetica, sans-serif">Votre nom :</font>
      </td>
      <td width="86%">
	      <input type="text" name="nom"  size="50" value="<?php echo $contact->nom; ?>" > 
	    </td>
    </tr>
    <tr>
      <td align="left" valign="middle">
	  <font size="3" face="Verdana, Arial, Helvetica, sans-serif">Votre mail :</font></td>
      <td>	    
	      <input type="text" name="mail" size="50" value="<?php echo $contact->mail; ?>" >  
      </td>
    </tr>
    <tr>
      <td valign="middle">
        <font size="3" face="Verdana, Arial, Helvetica, sans-serif">Tel :</font></td>
      <td>  
	      <input type="text" name="tel" size="20" value="<?php echo $contact->tel; ?>" > 
      </td>
    </tr>
      <td align="left" valign="middle">
	      <font size="3" face="Verdana, Arial, Helvetica, sans-serif">Sujet :</font>
      </td>
      <td>
	      <input type="text" name="sujet" size="50" value="<?php echo $contact->sujet; ?>" > 
      </td>
    </tr>
    <tr>
      <td height="181" valign="top">
	      <font size="3" face="Verdana, Arial, Helvetica, sans-serif">Message : </font>
      </td>
      <td valign="top">  
         <textarea name="message"  cols="47" rows="10" ><?php echo $contact->message; ?></textarea>
      </td>
    </tr>
    <tr>
      <td>
        &nbsp;  
      </td>
      <td>
	       <input type="submit"  name="envoyer" value="Envoyer">
      </td>
    </tr>
  </table>
</form>
<? /* FOMULAIRE FIN*/ ?>