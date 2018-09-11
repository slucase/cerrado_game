gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDInstructionsObjects1= [];
gdjs.MenuCode.GDInstructionsObjects2= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDControlsObjects1= [];
gdjs.MenuCode.GDControlsObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0x6b7d30 = function(runtimeScene, context) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = context.triggerOnce(7046396);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "welcome.mp3", false, 100, 1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b7d30
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.eventsList0x6b8848 = function(runtimeScene, context) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b8848
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects1});gdjs.MenuCode.eventsList0x6b8ef8 = function(runtimeScene, context) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b8ef8
gdjs.MenuCode.eventsList0xafd70 = function(runtimeScene, context) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x6b7d30(runtimeScene, context);} //End of subevents
}

}


{

gdjs.MenuCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.MenuCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x6b8848(runtimeScene, context);} //End of subevents
}

}


{

gdjs.MenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDQuitObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.MenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDQuitObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0x6b8ef8(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xafd70


gdjs.MenuCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDInstructionsObjects1.length = 0;
gdjs.MenuCode.GDInstructionsObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDControlsObjects1.length = 0;
gdjs.MenuCode.GDControlsObjects2.length = 0;

gdjs.MenuCode.eventsList0xafd70(runtimeScene, context);return;
}
gdjs['MenuCode']= gdjs.MenuCode;
