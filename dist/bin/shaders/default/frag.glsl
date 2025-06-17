layout(location = 0) out vec4 OutColor;

in vec3 DrawPos;
in vec2 DrawTexCoord;
in vec3 DrawNormal;
in vec4 DrawColor;

uniform vec3 Ka;
uniform vec4 KdTrans;
uniform vec4 KsPh;

uniform sampler2D Tex0;
uniform bool IsTexture0;

void main()
{                                 
  vec4 color;        
  if (IsTexture0)
    color = texture(Tex0, DrawTexCoord);
  else
    color = DrawColor;
  OutColor = vec4(color.xyz, KdTrans.w); 
}