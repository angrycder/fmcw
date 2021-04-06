import { Component} from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent{

  constructor() { }
   showFiller = false;
   n:number;

   wide = true;
   p =true;
  work: any[] = [
   {name:"Owen Davey",
  date:"9 April 2021",
  description:"An award-winning illustrator who specializes in creating retro-inspired illustrations and has got his work published worldwide. His clients include Google, Facebook, Sony, Lego and National Geographic. Winner of Best of Show and two Silver Awards in the 3x3 Professional Show 2019.",
  img:"../../assets/workshop/workshop_owen.jpg",
  club:"Design"
},
   {name:"Ashraful Arefin",
  date:"9 April 2021",
  description:"A Fine Art Photographer, with an allure towards photography since 2013, highly inspired by the still life and tries to portray beauty and emotion within his photographic frame by using amazing colours and simple techniques.",
  img:"../../assets/workshop/workshop_ashraful.jpg",
  club:"Photography"
},
{name:"V. Srinivas Mohan",
  date:"10 April 2021",
  description:"A visual effects artist working in the Indian film indutsry since 1996. He has contributed to the blockbusters like Bahubali: The Beginning; Ra.One; Enthiran and many moreand has received four National Film Awards for Best Special Effects.",
 img:"../../assets/workshop/workshop_sinivas.jpg",
 club:"Animation"
},
{name:"Akanksha Damini Joshi",
  date:"11 April 2021",
  description:"An Indian filmmaker known for her works on communal conflict, crisis and spiritual philosophy. Her documentaries, Chilika Bank$, Hindu Nectar, and Earth Witness won her various awards including the Best Film and the Best Director awards at both National, and International level.",
  img:"../../assets/workshop/workshop_akanksha.jpg",
  club:"Outreach"
},
{name:"Aarzoo Khurana",
  date:"11 April 2021",
  description:"A nature and wildlife photographer, currently the ambassador at Sony Alpha. She strives to find beauty in the light and shadows, portraying some of the most engaging moments one might witness in the wild. ",
  img:"../../assets/workshop/workshop_aarzoo.jpg",
  club:"Photography"
},
{name:"Ritam Bhatnagar",
  date:"10 April 2021",
  description:"Founder of India Film Project, Asia's largest content festival.He is also a recipient of the title of “Global Shaper” by the World Economic Forum.",
  img:"../../assets/workshop/workshop_ritam.jpg",
  club:"Cinema"
},
{name:"Mohammed Zeeshan ",
  date:"8 April 2021",
  description:"Founder of Rangreza Studios, a premium media services brand. He is a master of a wide array of professional cameras and lenses. As one of the prominent travellers and photographers in the community, he has inspired many to explore the world of photography.",
  img:"../../assets/workshop/workshop_zeeshan.jpg",
  club:"Photography"
},
{name:"Rohit Dawesar",
  date:"10 April 2021",
  description:"An Indore based author whose debut novel 'The Stupid Somebody' proclaimed him the title of best-selling author, even before signing for his very second book in 2020. Best known for his nanotales, he now creates magic with his words as a full-time writer.",
  img:"../../assets/workshop/workshop_rohit.jpg",
  club:"Media"
},
{name:"Sahil Dev",
  date:"11 April 2021",
  description:"A freelance designer driven by passion and having a knack for creativity, has helped 50+ startups including DOST, Crownstack, Daily Digital, and Josh Community, with their branding & identity in the span of 2 years. He is also leading the creative team of Guerrillas, an advertizing agency.",
  img:"../../assets/workshop/workshop_sahil.jpg",
  club:"Design"
}]
}
