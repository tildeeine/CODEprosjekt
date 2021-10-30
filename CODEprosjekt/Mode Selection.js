/**
 * A small UI Extensions panel with 4 quick dial numbers
 */

import xapi from 'xapi';

//const professorAddress = "https://www.canva.com/design/DAEuT7myWUc/N8A3TKD0HkqBGmE9f9pCyw/view?utm_content=DAEuT7myWUc&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
//const onsiteStudentAddress = "https://www.canva.com/design/DAEuTtf49aA/w5B10675CtD89VvaHDtXaw/view?utm_content=DAEuTtf49aA&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
//const offsiteStudentAddress = "https://www.canva.com/design/DAEuTl573QY/66lY-eT0zSrR-kcl2qiQsQ/view?utm_content=DAEuTl573QY&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
function listenToGui() {
  xapi.Event.UserInterface.Extensions.Widget.Action.on((event) => {
    if (event.Type === 'clicked') {
      if (event.WidgetId === "onsiteStudent" ) {
        xapi.Command.UserInterface.WebView.Display({ URL: onsiteStudentAddress});
      }
      else if (event.WidgetId === "offsiteStudent" ) {
        xapi.Command.UserInterface.WebView.Display({ URL: offsiteStudentAddress});
      }
      else if (event.WidgetId === "professor" ) {
        xapi.Command.UserInterface.WebView.Display({ URL: professorAddress});
      }
    }
  });
}

listenToGui();
