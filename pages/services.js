import React from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Template from '../components/Template';

export default function Service(){

  return(
    <div>
      <NavMenu color={'#7be3d2'}/>
      <Template obj={worker}/>
      <Template obj={student}/>
      <Template obj={sponsor}/>
      <Template obj={visitor}/>
      <Template obj={express}/>
      <Footer/>
    </div>
  );
}

let student = {
  title: 'Student',
  headline: 'Canada is one of the most desirable countries for students looking to learn english and study.',
  sum: 'We have some of the world’s top universities, and a Canadian education is recognized around the globe. As well, many of our cities are highly multicultural and have strong international ties, making Canada an ideal place to live and study.',
  h4:'Do you want to study in Canada? We can help you with:',
  services:['Getting your study permit', 'Changing your school or program', 'Applying for a post grad work permit after your studies', 'Extending your study permit', 'Applying for Permanent Residence after your studies', 'IELTS Preparation']
}

let worker = {
  title:'Worker',
  headline:'Canada consistently tops world surveys of workplace satisfaction and safety.',
  sum:'A range of people apply to work in Canada, from those who would like to practice their English in a formal work setting to workers who have in-demand specialty skills looking to transfer their expertise and experience into Canada.',
  h4:'We Can Help You With:',
  services:['Getting your work permit','Extending your work permit','Hiring a foreign worker, including temporary workers, permanent workers and LMIA\'s', 'International Experience Class- Working Holiday Visas and Young Professionals','International Mobility Category and offers of employment through the employer portal']
}

let sponsor = {
  title:'Sponsor',
  headline:'Do you have a loved one you would like to help immigrate to Canada?',
  sum:'As a Canadian or Permanent resident, you may be eligible to bring a spouse, parent or grandparent into Canada through various sponsorship streams.',
  h4:'We Can Help You Yith:',
  services:['Sponsoring your family members to Canada, including spouses, parents, and dependent children','Adopting a child from abroad']
}
let visitor = {
  title:'Visitor',
  headline:' A  handful of the safest cities in the world are in Canada making it an ideal place to visit for both families and solo travellers. ',
  sum:'',
  h4:'We Can Help You With:',
  services:['Visitors who are already in the country and wanting to change or extend their status.','Temporary Resident Visas (TRVs)','eTA applications', 'Parents and grandparents seeking visitor records and super visas']
}

let express = {
  title:'Express Entry',
  headline:'',
  sum:'',
  h4:'We Can Help You With:',
  services:['']
}


