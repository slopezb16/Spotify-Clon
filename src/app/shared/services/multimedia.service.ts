import {
  effect,
  EventEmitter,
  Injectable,
  Signal,
  signal,
} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callBack: EventEmitter<any> = new EventEmitter<any>();

  //declarar observable
  // myObservable1$: Observable<any> = new Observable();
  //Ejemplo 2 Subjet
  // myObservable1$: Subject<any> = new Subject();
  //Ejemplo 3
  // myObservable1$: BehaviorSubject<any> = new BehaviorSubject('agua');

  //TODO primero que vmamos a cambiar
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  //TODO Siganl
  public trackInfoSignal = signal<TrackModel | undefined>(undefined); // Inicializar con undefined

  // public audio!: HTMLAudioElement; // TODO Audio
  public audio: HTMLAudioElement = new Audio(); // TODO Inicializar audio

  // public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  // public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject(
  //   '-00:00'
  // );
  // public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  // public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  //TODO Siganl
  public timeElapsedSignal = signal<string>('00:00'); // Inicializar con undefined
  public timeRemainingSignal = signal<string>('-00:00');
  public playerStatusSignal = signal<string>('paused'); // Inicializar con undefined
  public playerPercentageSignal = signal<number>(0); // Inicializar con undefined

  constructor() {
    // this.myObservable1$ = new Observable((observer: Observer<any>) => {
    //   observer.next('Next 👌');
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 2500);
    //   //con el complite no se ejecuta esta parte
    //   setTimeout(() => {
    //     observer.error('Error');
    //   }, 2500);
    // });
    //Ejemplo 2
    // this.myObservable1$.next('Next ‼️');

    //Musica
    //TODO esto cambia debido al Signal
    // this.trackInfo$.subscribe((responseOK) => {
    //   // console.log('Captura Cancion', responseOk);
    //   if (responseOK) {
    //     this.setAudio(responseOK);
    //   }
    // });

    //TODO signal
    effect(() => {
      const dataInfo = this.trackInfoSignal();
      console.log('desde siganl como si fuera una subscripcion: ', dataInfo);
      if (dataInfo) this.setAudio(dataInfo);
    });

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private calculateTime = () => {
    // console.log('Disparar evento');
    const { duration, currentTime } = this.audio;
    // console.table([duration, currentTime]);
    this.setTimeAlapsed(currentTime);
    this.setRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  };

  //TODO: Tiempo transcurrido y tiempo final
  private setTimeAlapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60); //TODO 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60);
    //TODO  00:00 ---> 01:05 --> 10:15
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    // this.timeElapsed$.next(displayFormat);
    //TODO signal
    this.timeElapsedSignal.set(displayFormat);
  }

  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    // this.timeRemaining$.next(displayFormat);
    //TODO signal
    this.timeRemainingSignal.set(displayFormat);
  }

  //TODO: Pausar y despausar
  private setPlayerStatus = (state: any) => {
    switch (
      state.type //TODO: --> playing
    ) {
      // case 'play':
      //   this.playerStatus$.next('play');
      //   break;
      // case 'playing':
      //   this.playerStatus$.next('playing');
      //   break;
      // case 'ended':
      //   this.playerStatus$.next('ended');
      //   break;
      // default:
      //   this.playerStatus$.next('paused');
      //   break;
      //TODO signal
      case 'play':
        this.playerStatusSignal.set('play');
        break;
      case 'playing':
        this.playerStatusSignal.set('playing');
        break;
      case 'ended':
        this.playerStatusSignal.set('ended');
        break;
      default:
        this.playerStatusSignal.set('paused');
        break;
    }
  };

  //TODO: Tiempo transcurrido
  private setPercentage(currentTime: number, duration: number): void {
    //TODO duration ---> 100%
    //TODO currentTime ---> (x)
    //TODO (currentTime * 100) / duration
    let percentage = (currentTime * 100) / duration;
    // this.playerPercentage$.next(percentage);
    //TODO signal
    this.playerPercentageSignal.set(percentage);
  }

  //TODO: Funciones publicas

  public setAudio(track: TrackModel): void {
    console.log('Captura Cancion', track);
    this.audio.src = track.url;
    this.audio.play();
  }

  public togglePlayer(): void {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }
}
