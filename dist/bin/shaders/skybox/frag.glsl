layout(location = 0) out vec4 OutColor;

in vec3 DrawPos;
in vec2 DrawTexCoord;
in vec3 DrawNormal;
in vec4 DrawColor;

uniform vec3 Ka;
uniform vec4 KdTrans;
uniform vec4 KsPh;

uniform float ProjSize, ProjDist;
uniform float FrameW, FrameH;

uniform vec3 CamDir, CamUp, CamRight, CamLoc, CamAt;

uniform sampler2D Tex0;
uniform bool IsTexture0;

uniform samplerCube Tex;

void main( void )
{
  float Wp, Hp;
  
  Wp = Hp = ProjSize;
  if (FrameW > FrameH)
    Wp *= FrameW / FrameH;
  else
    Hp *= FrameH / FrameW;
 
  float
    xp = gl_FragCoord.x * Wp / FrameW - Wp / 2.0,
    yp = gl_FragCoord.y * Hp / FrameH - Hp / 2.0;
 
  vec3 D = normalize(CamDir * ProjDist + CamRight * xp + CamUp * yp);
  
  OutColor = texture(Tex, D);
}