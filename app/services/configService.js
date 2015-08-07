angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Ghana',
        'id'            : '117620641470438104052',
        'googleApi'     : 'AIzaSyDiLo2hSYg65hqbWqkk7k_uGmybjI7SpwQ',
        'pwaId'         : '5984308345831533409', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : '',
        'twitter'       : 'GDGGhana',
        'facebook'      : '',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - H:mm ',
        'cover' : {
            title: 'Join the Official Mailing List',
            subtitle: 'Hi there!!  The GDG Ghana community welcomes you. Please take a moment to briefly tell us about yourself and your projects. Remember to always Engage, Share and have Fun. Best Regards, GDG Organizing Team.',
            button: {
                text: 'Join Now',
                url: 'https://groups.google.com/forum/#!forum/ghana-gtug'
            }

        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
