/*!all-2017-08-14 */

$(function(){function a(){b==d-1?(b=-1,c.eq(d-1).fadeTo(1e3,0),c.eq(b+1).fadeTo(2e3,1)):(c.eq(b).fadeTo(1e3,0),c.eq(b+1).fadeTo(2e3,1)),b++}var b=0,c=$(".home-banner .li"),d=c.length;c.eq(0).fadeTo(2e3,1),setInterval(a,5e3)});