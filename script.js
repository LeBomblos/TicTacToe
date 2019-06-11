
console.log('aaa')
$('td').on('click', function(e){
    
    $(this).css("background", "#b5b5b5");
});


var tab = [];
tab[0] = [$('#a'), $('#b'), $('#c')];
tab[1] = [$('#a2'), $('#b2'), $('#c2')];
tab[2] = [$('#a3'), $('#b3'), $('#c3')];



for(let i = 0 ; i < 3 ; i++){
    
     for(let k = 0 ; k < 3 ; k++)
        {
            
$(tab[i][k]).on('click', function(){
    console.log(tab[i][k]);
})
        }

}
   