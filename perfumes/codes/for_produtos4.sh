file="<table bgcolor='#aabbcc' border='1' width='95%'>  <tr>   <th colspan='2'> Fragr&acirc;ncias Femininas </th>   <th colspan='2'> Fragr&acirc;ncias Masculinas  </th> </tr>"; for((i=1;i<=40;i++)); do [ $(expr $i % 2) -eq 1 ]&& file=$file" <tr>"; file=$file"<td> <img src=\"http://incolume.googlecode.com/svn/trunk/perfumes/imagens/f$([ $i -le 9 ] && echo "0$i"||echo "$i").png\" title=\"$([ $i -le 9 ] && echo 0$i||echo $i): $(head -${i} codperfumes|tail -1)\" alt=\"perfume $([ $i -le 9 ] && echo 0$i||echo $i): $(head -${i} codperfumes|tail -1)\" /> </td>   <td> <\!-- $(sed -e "s/XXX/$([ $i -lt 9 ] && echo "00${i}10"||echo "0${i}10")/g; s/AAAA 50 ml/$([ $i -lt 9 ] && echo "000$i"||echo "00$i") 10 ml/g; s/45/20/g;" mold.test) <hr /> --> $(sed -e "s/XXX/$([ $i -lt 9 ] && echo "00${i}30"||echo "0${i}30")/g; s/AAAA 50 ml/$([ $i -lt 9 ] && echo "000$i"||echo "00$i") 30 ml/g; s/45/33/g;" mold.test) <hr /> $(sed -e "s/XXX/$([ $i -lt 9 ] && echo "00${i}50"||echo "0${i}50")/g; s/AAAA 50 ml/$([ $i -lt 9 ] && echo "000$i"||echo "00$i") 50 ml/g; s/45/45/g;" mold.test) </td>"; [ $(expr $i % 2) -eq 1 ]|| file=$file" </tr>"; done; file=$file"<tr > <td colspan='4' align='right'> <strong> Res. Anvisa: 343/05 Aut: 2.04750-6 </strong> </td> </tr> </table>"; echo $file > produtos.html