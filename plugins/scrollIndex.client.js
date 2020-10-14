// console.log(inView, ' ~ ', JSON.stringify(inView));
// const handleView = item => {
//   console.log(item);
//   const linkEl = document.querySelector(`#link-${item}`);
    
//   let offsetHeight = 0.3*(window.innerHeight)
//   inView.offset({
//     bottom:offsetHeight
//   });
  
//   inView(`#${item}`)
//     .on("enter", () => {console.log(`active~${item}`); linkEl.classList.add('is-active')})
//     .on("exit", el  => {console.log(`inactive~${item}`); linkEl.classList.remove('is-active')})
// };


// // Apply method on each DOM element 
// ["popular_practice_areas", "business", "criminal", "civil_claim", "family", "personal_injury", "real_estate", "wilis_and_probate", "other"].forEach(handleView);
