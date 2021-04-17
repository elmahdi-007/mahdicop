<?php
class ContactFormulaire{

    public $nom;
    public $mail;
    public $tel;
    public $sujet;
    public $message;

    // Style pour le input et le textarea
    $style_input_blanc = 'style = "font-family: verdana;
                                   border-right: solid #000000 1px;
                                   border-TOP: solid #000000 1px;
                                   font-size: 8pt;
                                   border-left: solid #000000 1px;
                                   color: #000000;
                                   border-bottom: solid #000000 1px;
                                   background-color: #ffffff" ';

    $style_input_rouge = 'style = "font-family: verdana;
                                   border-right: solid #000000 1px;
                                   border-top: solid #000000 1px;
                                   font-size: 8pt;
                                   border-left: solid #000000 1px;
                                   color: #000000;
                                   border-bottom: solid #000000 1px;
                                   background-color: #ff0000 " ';

   $style_textarea_blanc = "style = \"
font-family: verdana;
border-right: solid #000000 1px;
 border-top: solid #000000 1px;
 FONT-size: 8pt;
 border-left: solid #000000 1px;
 color: #000000;
 border-bottom: solid #000000 1px;
 background-color: #ffffff\"";

 $style_textarea_rouge = "style = \"
 font-family: verdana;
 border-right: solid #000000 1px;
border-top: solid #000000 1px;
 font-size: 8pt;
 border-left: solid #000000 1px;
 color: #000000;
 border-bottom: solid #000000 1px;
 background-color: #ff0000\""; 

    public $webmaster = 'votremail@votredomaine.com';
    
    public function verif_null($var)
    { 
        if($var!="" and !empty($var)){
          return trim($var);
        }
        return null;
    }

    public function verif_mail($var) 
    {
        $code_syntaxe='#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,5}$#';   
        if(preg_match($code_syntaxe,$var)){ 
          return $var;
        }
        return null;   
    }

    public function verif_tel($var) 
    {
        $code_syntaxe='#^[0-9]{9,18}$#'; 
        if(preg_match($code_syntaxe,$var)){ 
          return $var;
        }
        return null;
    }
    
    function envoi_mail(){ //fonction qui envoie le mail
       
       $contenu_message = "Nom : ".$this->nom."\nMail : ".$this->mail."\nSujet : ".$this->sujet."\nTelephone : ".$this->tel."\nMessage : ".$this->message;
	     $entete = "From: ".$this->nom." <".$this->mail."> \nContent-Type: text/html; charset=iso-8859-1";	 
       mail($this->webmaster,$this->sujet,$contenu_message,$entete);
	
	  }
    
    public function loadForm($data){
        extract($data);
        $this->nom      = trim(htmlentities($nom, ENT_QUOTES));
        $this->mail     = $this->verif_mail($mai);
        $this->tel      = $this->verif_tel($tel);
        $this->sujet    = trim(htmlentities($sujet, ENT_QUOTES));
        $this->message  = trim(htmlentities($message, ENT_QUOTES));
        $test = $this->testForm();
        if(!empty($test)){
           $this->envoi_mail();
        };
    } 
    
    public function testForm(){
       if($this->verif_null($this->nom) and $this->verif_null($this->mail) and $this->verif_null($this->tel) and $this->verif_null($this->sujet) and $this->verif_null($this->message)){
          if($this->verif_mail($this->mail) and $this->verif_tel($this->tel)){
              return 1;
          }
          return null; 
       }
       return null; 
    }

}

?>
