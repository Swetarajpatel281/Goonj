import { GestureDescription, Finger, FingerCurl } from "fingerpose";
import * as fp from "fingerpose";

//victory
// Define the Victory gesture
const victoryGesture = new GestureDescription("victory");

// Index and middle fingers extended
victoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// Other fingers curled
victoryGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
victoryGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Thumb can vary between half-curl and no-curl
victoryGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
victoryGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);


// Hello Gesture
const helloGesture = new fp.GestureDescription("hello");
helloGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// OK Gesture
const okGesture = new fp.GestureDescription("ok");
okGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
okGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

// Bye Gesture
const byeGesture = new fp.GestureDescription("bye");
byeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
byeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
byeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
byeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
byeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Letter A: Fist with thumb on the side

const letterA = new fp.GestureDescription("A");
letterA.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letterA.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
letterA.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
letterA.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
letterA.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// Letter B: Fingers extended with thumb folded in front
const letterB = new fp.GestureDescription("B");
letterB.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  letterB.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
}

// Letter C: Hand forming a 'C' shape
const letterC = new fp.GestureDescription("C");
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  letterC.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

// Letter D: Index finger up, others curled
const letterD = new fp.GestureDescription("D");
letterD.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letterD.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  letterD.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

// Letter E: Fingers curled with thumb under
const letterE = new fp.GestureDescription("E");
letterE.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  letterE.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

// Letter F: Circle with thumb and index, others extended
// const letterF = new fp.GestureDescription("F");
// letterF.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
// letterF.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
// for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
//   letterF.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);

// }

export { helloGesture,victoryGesture, okGesture, byeGesture, letterA, letterB, letterC,letterD,letterE }
