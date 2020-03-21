import { Bird } from 'src/app/post';
import { Injectable } from '@angular/core';
import { User, Sighting, Species } from './user.model'
// import { Bird } from './post';
import { Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl = "https://olpejeta-apis.000webhostapp.com/api/users/";
  // birdUrl = "https://olpejeta-apis.000webhostapp.com/api/birds";
  sightingsUrl = "https://olpejeta-apis.000webhostapp.com/api/sightings";
  speciesUrl = "https://olpejeta.000webhostapp.com/getSpecies.php";
  
  searchOption=[]
  public birdsData: Bird[] 

  birdUrl : string = "https://olpejeta-apis.000webhostapp.com/api/birds";

  constructor(private http: HttpClient) { }  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getBirds(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.birdUrl)
      .pipe(
        tap(bird => console.log('fetched birds')),
        catchError(this.handleError('getBirds', []))
      );
  }
  
  getBird(id: number): Observable<Bird> {
    const url = `${this.birdUrl}/${id}`;
    return this.http.get<Bird>(url).pipe(
      tap(_ => console.log(`fetched bird id=${id}`)),
      catchError(this.handleError<Bird>(`getBird id=${id}`))
    );
  }
  
  addBird(bird: Bird): Observable<Bird> {
    return this.http.post<Bird>(this.birdUrl, bird, httpOptions).pipe(
      tap((bird: Bird) => console.log(`added bird w/ id=${bird._id}`)),
      catchError(this.handleError<Bird>('addBird'))
    );
  }
  
  updateBird(id: any, bird: Bird): Observable<any> {
    const url = `${this.birdUrl}/${id}`;
    return this.http.put(url, bird, httpOptions).pipe(
      tap(_ => console.log(`updated bird id=${id}`)),
      catchError(this.handleError<any>('updateBird'))
    );
  }
  
  deleteBird(id: any): Observable<Bird> {
    const url = `${this.birdUrl}/${id}`;
    return this.http.delete<Bird>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted bird id=${id}`)),
      catchError(this.handleError<Bird>('deleteBird'))
    );
  }


getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }

// getBirds(): Observable<Bird[]>{
//     return this.http.get<Bird[]>(this.birdUrl);
// }

getSightings(){
    return this.http.get<Sighting[]>(this.sightingsUrl);
}

// getSpecies(){
//   return this.http.get<Species[]>(this.speciesUrl);
// }

filteredListOptions() {
  let birds = this.birdsData;
  let filteredBirdsList = [];
  for (let bird of birds) {
    for (let options of this.searchOption) {
      if (options.common_name === bird.common_name) {
        filteredBirdsList.push(bird);
      }
    }
  }
  console.log(filteredBirdsList);
  return filteredBirdsList;
}
}

// getBirds(){
//   // return this._http.get<Birds[]>(this.birdUrl);
// }
// getSightings(){
//   return this._http.get<Sighting[]>(this.sightingsUrl);
// }
// getSpecies(){
//   return this._http.get<Species[]>(this.speciesUrl);
// }
