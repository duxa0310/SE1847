layout(location = 0) out vec4 OutColor;

in vec3 DrawPos;
in vec2 DrawTexCoord;
in vec3 DrawNormal;
in vec4 DrawColor;

uniform vec3 Ka;
uniform vec4 KdTrans;
uniform vec4 KsPh;

void main()
{
  OutColor = vec4(Ka * DrawColor.xyz, KdTrans.w); 
}