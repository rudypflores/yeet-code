import React, { useState, useEffect } from 'react';
import './ProblemScreen.css';
import Editor from '../components/Editor';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/meta';
import 'codemirror/mode/javascript/javascript';
import Cam from '../components/Cam';

const ProblemScreen = () => {

    const [file, setFile] = useState('');

    useEffect(() => {
        console.log(file);
    });

    const handleFiles = files => {
        setFile({ file:files.base64 })
        console.log(file);
    };

    return(
        <div>
            <Cam/>
            <div id="problem">
            <p>
            132 Pattern<br/>
            ----<br/>
            Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such<br/>
            that i &lt; j &lt; k and ai &lt; ak &lt; aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.<br/><br/>

            Note: n will be less than 15,000.<br/><br/>

            Example 1:<br/><br/>

            Input: [1, 2, 3, 4]<br/><br/>

            Output: False<br/><br/>

            Explanation: There is no 132 pattern in the sequence.<br/><br/><br/>



            Example 2:<br/><br/>

            Input: [3, 1, 4, 2]<br/><br/>

            Output: True<br/><br/>

            Explanation: There is a 132 pattern in the sequence: [1, 4, 2].<br/><br/><br/>



            Example 3:<br/><br/>

            Input: [-1, 3, 2, 0]<br/><br/>

            Output: True<br/><br/>

            Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
            </p>
            </div>
            <Editor />
        </div>
    );
};

export default ProblemScreen;