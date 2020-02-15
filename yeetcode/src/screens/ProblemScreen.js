import React from 'react';
import Video from '../components/video';
import Compiler from '../components/compiler';
import ProblemGenerator from '../components/problemsGenerator';


const ProblemScreen = () => {
    return (
        <div>
            <Video />
            <Compiler />
            <ProblemGenerator />
        </div>
    );
};

export default ProblemScreen;