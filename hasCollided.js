function hasCollided(lBullet, lWall)
{
  var bulletRightEdge, wallLeftEdge

bulletRightEdge=lBullet.x+lBullet.width
wallLeftEdge=lWall.x

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;


}
