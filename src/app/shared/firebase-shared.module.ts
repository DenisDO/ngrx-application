import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../core/services/firebase.services';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [],
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        // AngularFirestoreModule
    ],
    providers: [
        AngularFireAuth,
        FirebaseService
    ],
    exports: []
})
export class FirebaseSharedModule { }
