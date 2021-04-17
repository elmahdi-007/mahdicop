//LMSOFT Web Creator Pro, Version:6.0.0.8
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('fr');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(4.00,4.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1000;
LMObjects[objindex++] = LMDiv("PanelHeader",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMDiv("PanelMenu",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./index.asp",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./produits.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./modele-b.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./g-p.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./contact.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("PanelCenter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("DecoEdit",1,1,0,null,0,null,null,null,null,0);
if(is.ns) DecoEdit=FindTagFromId('DecoEdit');
LMObjects[objindex++] = LMDiv("PanelBanner",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxBanner1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("PanelBlocs",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMDiv("Titre1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box13",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre13",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img13",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./produits.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
var Photos=new Array();
Photos[0]= new Photo("./photos/Sans titre2_thumb.jpg","./photos/Sans titre2.jpg",1024,617,"Sans titre2.jpg",null);
Photos[1]= new Photo("./photos/Sans titre4_thumb.jpg","./photos/Sans titre4.jpg",1024,640,"Sans titre4.jpg",null);
Photos[2]= new Photo("./photos/Sans titre6_thumb.jpg","./photos/Sans titre6.jpg",1024,546,"Sans titre6.jpg",null);
Photos[3]= new Photo("./photos/Sans titre7_thumb.jpg","./photos/Sans titre7.jpg",1024,546,"Sans titre7.jpg",null);
Photos[4]= new Photo("./photos/Sans titre9_thumb.jpg","./photos/Sans titre9.jpg",1024,622,"Sans titre9.jpg",null);
Photos[5]= new Photo("./photos/Sans titre10_thumb.jpg","./photos/Sans titre10.jpg",1024,691,"Sans titre10.jpg",null);
Photos[6]= new Photo("./photos/Sans titre11_thumb.jpg","./photos/Sans titre11.jpg",1024,800,"Sans titre11.jpg",null);
Photos[7]= new Photo("./photos/sans-titre6_thumb.jpg","./photos/sans-titre6.jpg",1024,546,"sans-titre6.jpg",null);
Photos[8]= new Photo("./photos/sans-titre7_thumb.jpg","./photos/sans-titre7.jpg",1024,546,"sans-titre7.jpg",null);
LMObjects[objindex++] = LMGal("Gal1",1,1,0,0,Photos,4000,"Slide", "./", 400, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0);
LMObjects[objindex++] = LMDiv("PanelFooter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter2",1,1,0,null,0,null,null,null,null,0);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ef,0x3f8,0x71);
LMObjectAnimate();

