import { Component } from '@angular/core';
import { ActionSheetController, AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: 'folder.page.html',
  styleUrls: ['folder.page.scss'],
})
export class FolderPage {

  tasks : any[] = [];
  ActionSheetController: any;

  constructor(private alertCtrl: AlertController, private toastCtrl : ToastController, private actionSheetCtrl : ActionSheetController) {
    let taskJson = localStorage.getItem('taskDb');

    if (taskJson != null){
      this.tasks = JSON.parse(taskJson);
    }
  }

  async showAdd(){
    
    const alert = await this.alertCtrl.create({
      header: 'Adicionar novo codigo?',
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'Insira aqui'
        },
        {
          name: 'data',
          type: 'text',
          placeholder: 'Data Prevista'
        },
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar Cancelar');
          }
        }, {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form.task);

           this.add(form.task);
           this.add(form.data);
          }
        }
      ]
    });

    await alert.present();

  }

  async add(newTask: string) {
    if (newTask.trim().length < 1)
    {
      const toast = await this.toastCtrl.create({
          message: 'Informe o que deseja fazer',
          duration: 2000,
          position: 'top',
      });

      toast.present();
      return;
    }
    let task = { name: newTask, done: false};

    this.tasks.push(task);

    this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }

  delete(task : any){
    this.tasks = this.tasks.filter(taskArray => task != taskArray);
    this.updateLocalStorage();
  }

}
