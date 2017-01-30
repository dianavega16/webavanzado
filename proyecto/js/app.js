(function(){
'use strict';

angular
.module("myApp",[])
.controller("movieCtrl",movieCtrl);

function movieCtrl(){
  var movie= this;

  //movie.nombre=[{'nombre': 'Yeled','edad':'18'}, {'nombre':'Diana','edad':'19'}];

  movie.collection=[
    {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BNDI5MDgyMTYzNF5BMl5BanBnXkFtZTcwMjAwNzk1Mw@@._V1_.jpg',
    'name':'White Collar',
    'cast':['Matt Bomer','Tim Dekey', 'Willie Garson'],
    'year':2009,
    'category':'drama',
  },

  {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BN2FjNjBlMDEtNGMxNS00MmU2LThkYTAtOGNkOTBiMjZjZjA1XkEyXkFqcGdeQXVyNjM2MzAyODA@._V1_.jpg',
  'name':'The vampire Diaries',
  'cast':['Ian Somerhalder','Paul Weasley'],
  'year':2009,
  'category':'drama',
},

{'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2YjViYzctMjZjNi00YzZjLWE0ZjEtYTJkZTY0OTI3NjQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,701,1000_AL_.jpg',
'name':'The Originals',
'cast':['Joseph Morgan','Danielle Gillies'],
'year':2013,
'category':'drama',
},

  ];
}

})();
