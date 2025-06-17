layout(location = 0) out vec4 OutColor;

uniform sampler2D Tex0;

uniform float ProjSize;
uniform float ProjDist;
uniform float FrameW;
uniform float FrameH;

uniform vec3 CamLoc;
uniform vec3 CamAt;
uniform vec3 CamUp;
uniform vec3 CamDir;
uniform vec3 CamRight;

void main( void )
{
  float Wp = ProjSize, Hp = ProjSize;
 
  if (FrameW > FrameH)
    Wp *= FrameW / FrameH;
  else
    Hp *= FrameH / FrameW;
 
  float 
    xp = Wp * gl_FragCoord.x / FrameW - Wp / 2.0,
    yp = Hp * gl_FragCoord.y / FrameH - Hp / 2.0;
  vec3 Dir = normalize(CamDir * ProjDist + CamRight * xp + CamUp * yp);
  float
    pi = acos(-1.0),
    theta = acos(-Dir.y),
    phi = atan(Dir.x, Dir.z);
  vec2 texcoord = vec2(phi / 2.0 / pi, theta / pi);

  vec4 tc = texture(Tex0, texcoord);
  OutColor = vec4(tc.rgb, 1.0);
}