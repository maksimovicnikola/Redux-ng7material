import { ContactService } from "./services/contact.service";
import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Contact } from "src/models/Contact";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import {
  Increment,
  Decrement,
  Reset
} from "./state-management/contacts/contacts.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  count$: Observable<Contact[]>;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    translate: TranslateService,
    public contactsService: ContactService,
    private store: Store<{ contacts: Contact[] }>
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // set translation language
    translate.addLangs(["en", "sr"]);
    translate.setDefaultLang("en");
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|sr/) ? browserLang : "sr");

    //redux
    this.count$ = store.pipe(select("contacts"));
  }

  public Contacts: Contact[] = [];

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  addContact() {
    this.store.dispatch(new Increment());
  }

  removeContact() {
    this.store.dispatch(new Decrement());
  }

  removeAllContacts() {
    this.store.dispatch(new Reset());
  }
}
