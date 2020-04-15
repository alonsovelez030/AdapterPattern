import { RCA } from "./interfaces/adapter.interface";
import { HDMI } from './adaptee/hdmi.class';

export class HDMItoRCAClass extends HDMI implements RCA{
    public obtenerCanalVideo(){
        console.log('Convertir fuente de video HD a Video analógico');
        this.obtenerVideoHD();
        console.log('---------');
    };
    public obtenerCanalAudioDcho(){
        console.log('Convertir fuente de audio HD a Audio analógico Derecho');
        this.obtenerAudioHD();
        console.log('---------');
    };
    public obtenerCanalAudioIzdo(){
        console.log('Convertir fuente de audio HD a Audio analógico Izquierdo');
        this.obtenerAudioHD();
        console.log('---------');
    };
}