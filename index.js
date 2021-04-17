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
defpagewitdh=960;
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./index.asp",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./produits.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./modele-b.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./g-p.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./contact.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Panel2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box7",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
Img5.PopUp=new Function("LMImageOpenPopUp('Img5',800,486);");
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
Img6.PopUp=new Function("LMImageOpenPopUp('Img6',800,482);");
LMObjects[objindex++] = LMDiv("Box3",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre3",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img7=FindTagFromId('Img7');
Img7.PopUp=new Function("LMImageOpenPopUp('Img7',800,427);");
LMObjects[objindex++] = LMDiv("Box4",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre6",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img10=FindTagFromId('Img10');
Img10.PopUp=new Function("LMImageOpenPopUp('Img10',902,705);");
LMObjects[objindex++] = LMDiv("Box5",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre5",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
Img8.PopUp=new Function("LMImageOpenPopUp('Img8',800,427);");
LMObjects[objindex++] = LMDiv("Box6",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Titre4",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
Img9.PopUp=new Function("LMImageOpenPopUp('Img9',922,622);");
LMObjects[objindex++] = LMObjWeb("Compteur1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ef,0x3f8,0x71);
LMObjectAnimate();

function PageTrapClick(e)
{
	if(is.ns && e.which!=1) return false;
	if(is.ie && event.button!=1) return false;
	if(is.ns && is.major<5) if(NSLMGlobalDn(e)==false) return false;
}
document.onmousedown=PageTrapClick;
document.oncontextmenu=new Function("return false;");
function Img10_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=FindTagFromId("Img10");
   Img10.PopUp();
   //LMSOFT End Event-Action

}


function Img9_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.PopUp();
   //LMSOFT End Event-Action

}


function Img8_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=FindTagFromId("Img8");
   Img8.PopUp();
   //LMSOFT End Event-Action

}


function Img7_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=FindTagFromId("Img7");
   Img7.PopUp();
   //LMSOFT End Event-Action

}


function Img6_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.PopUp();
   //LMSOFT End Event-Action

}


function Img5_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=FindTagFromId("Img5");
   Img5.PopUp();
   //LMSOFT End Event-Action

}