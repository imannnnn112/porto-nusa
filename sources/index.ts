

interface menu {
    nama : string
    kategori : string 
    harga : number
}

const menus :menu[] = [
    {
    nama : 'nasi oyeng',
    kategori : "makanan",
    harga : 100.000
},
{
    nama : 'jahe',
    kategori : "buah",
    harga : 100.000
},
{
    nama : 'jus cicak',
    kategori : "minuman",
    harga : 900.000
}
];

for (const menu of menus) {
    console.log(`hari ini ${menu.kategori}ku adalah ${menu.nama}`)
}
type seafood = string | boolean 
const isDark : seafood = true
