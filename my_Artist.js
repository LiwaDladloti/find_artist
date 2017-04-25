var artistList = [
    {
        artistName: 'LKG',
        artistLocation: 'Cape Town, Kuilsriver',
        artistCharges: 'R350',
        artistGenre: 'Soulful House',
        artistCell: '000 000 0000',
        artistEmail: 'lkg@mail.com'
    },    
    {
        artistName: 'King Gideon',
        artistLocation: 'Cape Town, Belhar',
        artistCharges: 'R250',
        artistGenre: 'Afro House',
        artistCell: '000 000 0000',
        artistEmail: 'kinggideon@mail.com'
    },
    {
        artistName: 'Liwa Deep',
        artistLocation: 'Cape Town, Khayelitsha',
        artistCharges: 'R300',
        artistGenre: 'Deep House',
        artistCell: '000 000 0000',
        artistEmail: 'liwa@mail.com'
    },
    {
        artistName: 'Rap_Kid SA',
        artistLocation: 'Cape Town, Mfuleni',
        artistCharges: 'R150',
        artistGenre: 'Hip Hop',
        artistCell: '000 000 0000',
        artistEmail: 'rapkidsa@mail.com'
    }
];

var dropDowntemplate = document.querySelector('.dropDowns').innerHTML;
var dropDownTemp = Handlebars.compile(dropDowntemplate);
var tableTemplate = document.querySelector('.tableTemp').innerHTML;
var tableTemp = Handlebars.compile(tableTemplate);

document.querySelector('.location').innerHTML = dropDownTemp({locationOption: artistList});

document.querySelector('.genre').innerHTML = dropDownTemp({genreOption: artistList});

var locateBtn = document.querySelector('.locateBtn');
locateBtn.addEventListener('click', function () {
    var locationDropdown = document.querySelector('.location').value;
    var genreDropdown = document.querySelector('.genre').value;
    var pushHere = [];
    if (locationDropdown !== '' && genreDropdown !== '') {
        for (var i = 0; i < artistList.length; i++) {
            var artistValue = artistList[i];
            if (locationDropdown === artistValue.artistLocation && genreDropdown === artistValue.artistGenre) {
                pushHere.push(artistValue)
            }
        document.querySelector('.myTable').innerHTML = tableTemp({artist: pushHere});
        }
    }
    else{
        alert('Please select both Town and Genre')
    }
});

var showAll = document.querySelector('.showAll');
showAll.addEventListener('click', function () {
    document.querySelector('.myTable').innerHTML = tableTemp({artist: artistList});
});

