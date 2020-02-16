import React, { Component } from "react";
import './Editor.css';
import './darcula.css';


class Editor extends Component {
  componentDidMount() {
    //// Initialize Firebase.
    //// TODO: replace with your Firebase project configuration.
    var config = {
      apiKey: "AIzaSyC_sS0XzK92EuGnt-i2CuNNhwH57ag8sJA",
      databaseURL: "https://hello-firebase-rr.firebaseio.com",
    };
    window.firebase.initializeApp(config);
    //// Get Firebase Database reference.
    var firepadRef = this.getExampleRef();
    //// Create CodeMirror (with lineWrapping on).
    //todo make mode a variable 
    var codeMirror = window.CodeMirror(document.getElementById('firepad-container'), { lineNumbers: true, mode: 'javascript', theme:"darcula" });
    //// Create Firepad (with rich text toolbar and shortcuts enabled).
    var firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror,
        { });
        
    //// Initialize contents.
    firepad.on('ready', function() {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml('<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/><br/>Collaborative-editing made easy.\n');
      }
    });

    const removeWatermark = document.getElementsByClassName('powered-by-firepad');
    removeWatermark[0].parentNode.removeChild(removeWatermark[0]);
  }

  // Helper to get hash from end of URL or generate a random one.
  getExampleRef() {
    var ref = window.firebase.database().ref();
    var hash = window.location.hash.replace(/#/g, '');
    if (hash) {
      ref = ref.child(hash);
    } else {
      ref = ref.push(); // generate unique location.
      window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
      console.log('Firebase data: ', ref.toString());
    }
    return ref;
  }

  render() {
    return (
        <div>
            <div id="firepad-container"></div>
        </div>
    );
  }
}
export default Editor;