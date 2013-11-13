cat codperfumes |awk '$1=="Ecssus" {print "document.write(\""$1,"#"$2" &#8212;",$5" &#8212;",$7,$8,$9,$10"<br />\");"}'
