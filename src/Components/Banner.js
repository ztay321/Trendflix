// // import {movies} from './getMovies';
// // import React, { Component } from 'react'

// // export default class Banner extends Component {
    
// //     render() {
// //         let movie = movies.results[1]
// //         // let movie=''
// //         return (
// //             <>
// //             {   movie == ''?
// //                 <div className="spinner-border text-primary" role="status">
// //                     <span className="visually-hidden">Loading...</span>
// //                 </div>:
// //                 <div className="card banner-card">
// //                     {/* <a href="https://codingbeautydev.com" rel="noreferrer"> */}
// //                 <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
// //                 {/* </a> */}
// //                 {/* <div className="card-body"> */}
// //                     <h1 className="card-title banner-title">{movie.original_title}</h1>
// //                     <p className="card-text banner-text">{movie.overview}</p>
// //                     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
// //                 {/* </div> */}
// //                 </div>
// //             }
// //             </>
// //         )
// //     }
// // }
// /////////////idhar se
// import {movies} from './getMovies';
// import React, { Component } from 'react'

// export default class Banner extends Component {
    
//     render() {
//         let movie = movies.results[1]
//         // let movie=''
//         return (
//             <>
//             {   movie == ''?
//                 <div className="spinner-border text-primary"  role="status">
//                     <span className="visually-hidden">Loading...</span>
//                  </div>: <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="d-block w-100" src="..." alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="..." alt="Second slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="..." alt="Third slide" />
//           </div>
//         </div>
//       </div>
//     //              {/*<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//     //     <div className="carousel-inner">
//     //       <div className="carousel-item active">
//     //         <img className="d-block w-100" src="..." alt="First slide" />
//     //       </div>
//     //       <div className="carousel-item">
//     //         <img className="d-block w-100" src="..." alt="Second slide" />
//     //       </div>
//     //       <div className="carousel-item">
//     //         <img className="d-block w-100" src="..." alt="Third slide" />
//     //       </div>
//     //     </div>
//     //     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     //       <span className="carousel-control-prev-icon" aria-hidden="true" />
//     //       <span className="sr-only">Previous</span>
//     //     </a>
//     //     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     //       <span className="carousel-control-next-icon" aria-hidden="true" />
//     //       <span className="sr-only">Next</span>
//     //     </a>
//     //   </div> */}
// //                  <div  className="carousel slide" id="carouselExampleControls" data-ride="carousel" >
// //                {/* <div className="card banner-card"> */}
// //                 {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
              
// //                     <h1 className="card-title banner-title">{movie.original_title}</h1>
// //                     <p className="card-text banner-text">{movie.overview}</p> */}
                   
// //   <div className="carousel-inner">
// //     <div className="carousel-item active">
// //     <img src={`https://image.tmdb.org/t/p/original${movies.results[0].backdrop_path}`} className="d-block w-100" alt={movie.title} />
// //     </div>
// //     <div className="carousel-item " >
// //     <img src={`https://image.tmdb.org/t/p/original${movies.results[1].backdrop_path}`} alt={movie.title} className="d-block w-100" />
// //     </div>
// //     <div className="carousel-item" >
// //     <img src={`https://image.tmdb.org/t/p/original${movies.results[2].backdrop_path}`} alt={movie.title} className="d-block w-100" />
// //     </div>
// //   </div>
// //   <a className="carousel-control-prev" href={'#carouselExampleControls'} role="button" data-slide={"prev"}>
// //     <span className="carousel-control-prev-icon" ></span>
// //     {/* <span className="sr-only">Previous</span> */}
// //   </a>
// //   <a className="carousel-control-next" href={'#carouselExampleControls'} role="button" data-slide={"next"}>
// //     <span className="carousel-control-next-icon" ></span>
// //     {/* <span className="sr-only">Next</span> */}
// //   </a>
// // </div>
                  
//             //   </div>
//             }
//             </>
//         )
//     }
// }





























import {movies} from './getMovies';
import React, { Component } from 'react'

export default class Banner extends Component {
    
    render() {
        let movie = movies.results[1]
        // let movie=''
        return (
            <>
            {   movie == ''?
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card">
                    {/* <a href="https://codingbeautydev.com" rel="noreferrer"> */}
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
                {/* </a> */}
                {/* <div className="card-body"> */}
                    <h1 className="card-title banner-title">{movie.original_title}</h1>
                    <p class="card-text banner-text">{movie.overview}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
                </div>
            }
            </>
        )
    }
}