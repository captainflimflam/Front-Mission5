function OnMouseEnter()
{
//change colour or the button
GetComponent.<Renderer>().material.color = Color.white;
}

function OnMouseExit()
{
//change colour or the button

//var aColor: Color = Vector4(1, 0.92, 0.016, 1);
//renderer.material.color = Color.Vector4;
GetComponent.<Renderer>().material.color = Color.blue;
}