import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import SnP from '../../../components/molecules/SnP';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

const Model = ({navigation}) =>{
  const handleGoTo = screen => {
    navigation.navigate(screen);
}
    const URL = "./src/model";
    let model, webcam, ctx, labelContainer, maxPredictions;

    async function init() {
        const modelURL = URL + "./src/model/model.json";
        const metadataURL = URL + "./src/model/metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }

        // finally draw the poses
        drawPose(pose);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SnP />
      <View style={{flex: 1,top: 250, fontSize: 16, alignItems: 'center'}}>
        <Text> Segera Hadir </Text>
        <Text> Page Model </Text>
      </View>
      <View style={{height: 63, backgroundColor: 'green', flexDirection: 'row', borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
          <NavBarIcon title="HOME" img={require('../../../assets/icon/home.png')} onPress={() => handleGoTo('Home')}/>
          <NavBarIcon title="COBA" img={require('../../../assets/icon/power.png')} onPress={() => handleGoTo('Model')}/>
          <NavBarIcon title="CAPAIAN" img={require('../../../assets/icon/skill.png')} onPress={() => handleGoTo('Capaian')}/>
      </View>
    </View>
      );
}

export default Model;










// import React, { useEffect, useRef, useState } from "react";
// import ml5 from "ml5";
// import Loader from 'react-loader-spinner';
// import useInterval from '@use-it/interval';

// import Princess from '../../../../Princess';
// import Chart from '../../../../Chart';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "./AppCSS";

// let classifier;

// function Model() {
//   const videoRef = useRef();
//   const [start, setStart] = useState(false);
//   const [result, setResult] = useState([]);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     classifier = ml5.imageClassifier("./src/model/model.json", () => {
//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: false })
//         .then((stream) => {
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();
//           setLoaded(true);
//         });
//     });
//   }, []);

//   useInterval(() => {
//     if (classifier && start) {
//       classifier.classify(videoRef.current, (error, results) => {
//         if (error) {
//           console.error(error);
//           return;
//         }
//         setResult(results);
//         // console.log(results)
//       });
//     }
//   }, 500);

//   const toggle = () => {
//     setStart(!start);
//     setResult([]);
//   }

//   return (
//     <div className="container">
//       <Loader
//         type="Watch"
//         color="#00BFFF"
//         height={200}
//         width={200}
//         visible={!loaded}
//         style={{display:'flex', justifyContent:'center', marginTop:'30px' }}
//       />
//       <div className="upper">
//         <div className="capture">
//           <video
//             ref={videoRef}
//             style={{ transform: "scale(-1, 1)" }}
//             width="300"
//             height="150"
//           />
//           {loaded && (
//             <button onClick={() => toggle()}>
//               {start ? "Stop" : "Start"}
//             </button>
//           )}
//         </div>
//         {result.length > 0 && (
//           <div>
//             <Chart data={result[0]} />
//           </div>
//         )}
//       </div>
//       {result.length > 0 && (
//         <div className="results">
//           <Princess data={result} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Model;