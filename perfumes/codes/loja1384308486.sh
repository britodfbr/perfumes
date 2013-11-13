for ((i=1;i<=44;i++)); do printf '%03d30\n' $i; done

for ((i=1;i<=44;i++)); do printf "{'id': '%03d30', 'img': 'm00.png', 'descr': 'Ecssus 044 50ml', 'genero': 'Unissex  ', 'vref': 'R$ 70,00', 'valor': 70.00, 'ref': 'Calvin Klein Be'},\n" $i; done

cat codperfumes |awk '$1=="Ecssus" {print "{id: 0"$2"50, img: m00.png, descr: Ecssus 0"$2" 50ml, genero: "$5",\t vref: R$ 70,00, valor: 70.00, ref: "$7,$8,$9"},"}'

cat codperfumes |awk '$1=="Ecssus"&&$5=="Feminino"||$5=="Unissex"  {print "{id: 0"$2"50, img: m00.png, descr: Ecssus 0"$2" 50ml, genero: "$5",\t vref: R$ 70,00, valor: 70.00, ref: "$7,$8,$9"},"}'
