import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroImageUrl = 'assets/images/hero.png';
  villainImageUrl = 'assets/images/villain.png';
  
  // 위험한 HTML 요소는 Angular가 무효화시킵니다
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  
  badCurly = "test1 test2";
  isSpecial = true;
  canSave = true;
  isUnchanged =true;

  // sizer
  fontSizePx = 16;
  // /sizer

  currentStyles: {};
  setCurrentStyles() {
    // 컴포넌트 프로퍼티의 현재 스테이트에 따라 CSS 스타일을 지정합니다.
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  currentClasses: {};
  setCurrentClasses() {
  // 컴포넌트 프로퍼티의 현재 스테이트에 따라 CSS 클래스를 지정하거나 제거합니다.
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}

}
