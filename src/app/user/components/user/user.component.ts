import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  comics: any;

  ngOnInit() {
    this.initComics();
  }

  private initComics(): void {
    this.comics = [{
      id: '1',
      name: 'DC Comics Rebirth',
      description: 'It all begins here. Do not skip to the last page. Do not let a friend or message board ruin this comic for you. The future (and past) of the DC Universe starts here. Don’t say we didn’t warn you!',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2016/05/DCUREB_Cv1_ds_300dpi_cropped_5743b270aaaae3.39723701.jpg?itok=JpNJJ2_O',
      price: '$2.99'
    },
    {
      id: '2',
      name: 'Batman - Rebirth',
      description: 'Longtime Batman and Eisner Award-winning writer Scott Snyder co-writes with rising-star writer Tom King! EVIL 365: Gotham City faces the threat of the Calendar Man!',
      image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2018/06/batman_rebirth_v3_1_5b2adc77c84e12.39492357.jpg?itok=rqqWA7aR',
      price: '$2.99'
    },
    {
      id: '3',
      name: 'Superman - Rebirth',
      description: 'The world needs a Man of Steel, but can Superman protect the world while raising a super-son with his wife, Lois Lane? IT BEGINS: Now its Clarks turn to be Pa Kent and teach his son what it means to be super, but who is hunting Supermans son—and why?',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/superman_v4_rebirth_1_5b1c6facc2caa5.26722836.jpg?itok=5eOnyRca',
      price: '$2.99'
    },
    {
      id: '4',
      name: 'Wonder Woman - Rebirth',
      description: 'After suffering an unimaginable loss, Wonder Woman must rebuild her mission as Earth’s ultimate protector and champion.',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/ww_rebirth_v5_1_5b2aef346f5a21.48248522.jpg?itok=nu7We2Ao',
      price: '$2.99'
    },
    {
      id: '5',
      name: 'The Flash - Rebirth',
      description: 'Spinning directly out of the epic events of DC UNIVERSE: REBIRTH #1, the Fastest Man Alive finds himself at the center of a DC Universe at a crossroads.',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/flash_rebirth_v5_1_5b2436ac1f3350.40172412.jpg?itok=vtDu6Du3',
      price: '$2.99'
    },
    {
      id: '6',
      name: 'Hal Jordan and the Green Lantern Corps - Rebirth',
      description: 'In the absence of the Green Lantern Corps, Sinestro and his fear-inducing Yellow Lantern Corps patrol the universe as its sole protectors—but deep in space, a green light still burns. Harnessing the remainder of his will, Hal Jordan must become a one-man GL Corps to defeat his greatest foe and restore freedom to the cosmos.',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/hjatglc_rb_1_5b2d22a066a775.31042581.jpg?itok=E1F3WO4m',
      price: '$2.99'
    },
    {
      id: '7',
      name: 'Aquaman - Rebirth',
      description: 'Born to both the surface and the sea, Arthur Curry walks in two worlds but can find a home in neither. The King of Atlantis looks to reconcile his split heritage as he embarks on a new mission that may finally make him choose between his two paths.',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/aquaman_rebirth_v8_1_5b1c471a7e8528.73834951.jpg?itok=sqxVgapg',
      price: '$2.99'
    },
    {
      id: '8',
      name: 'Green Arrow - Rebirth',
      description: 'Together again for the first time, the Emerald Archer meets Black Canary. Questioning everything Green Arrow believes in, Dinah Lance throws the hero’s world upside down, forcing him to question what he cares about more: his morals or his money?',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/ga_rb_v6_1_5b2c38a20988b6.28651231.jpg?itok=vYmRkRFn',
      price: '$2.99'
    },
    {
      id: '9',
      name: 'Cyborg - Rebirth',
      description: 'Victor Stone was once a star athlete and brilliant student with a bright future. But after a tragic accident destroyed over half of his body, Victor was kept alive by merging flesh with advanced technology. Today he is the Justice League co-founder called Cyborg. But is the young hero a man…or a machine that merely believes it’s a man?',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/cyb_rb_v2_1_5b2be58c52a0c5.46280582.jpg?itok=_K-XodmM',
      price: '$2.99'
    },
    {
      id: '10',
      name: 'Green Lanterns - Rebirth',
      description: 'Rookie Green Lanterns Jessica Cruz and Simon Baz tackle the universe s toughest beat: Earth',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/gls_rb_1_5b2d1cb52d27e6.76280738.jpg?itok=_WBB76nG',
      price: '$2.99'
    },
    {
      id: '11',
      name: 'Justice League - Rebirth',
      description: 'Spinning out of the events of DC UNIVERSE: REBIRTH #1, a new day dawns for Earth’s greatest heroes as they welcome three new members to the team, including…Superman? Who is this strange visitor from a dead world—and can he be trusted? Batman and Wonder Woman aren’t so sure.',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/jl_rebirth_v3_1_5b2af5ad1e73f5.32356665.jpg?itok=NBqSiNu1',
      price: '$2.99'
    },
    {
      id: '12',
      name: 'Nightwing - Rebirth',
      description: 'He’s been Robin, Batman, a spy, a ghost. Now, Dick Grayson returns to Gotham City to reclaim the life that was taken from him. But when a new evil threatens those he loves most, Nightwing faces being torn away from home once again in order to destroy the dark force once and for all.',
      image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/ntwng_v4_rb_1_5b3574c67503f1.99478196.jpg?itok=D2buyzjl',
      price: '$2.99'
    }
    ];
  }

}
