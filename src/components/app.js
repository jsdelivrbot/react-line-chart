import React, { Component } from 'react';
import { CartesianGrid, Legend, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import moment from 'moment';

const customToolTipStyles = {
	area: {
		margin: 0,
		padding: "10px",
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		width: 100,
	    border: "1px solid"
	}
};

export default class App extends Component {
	render() {
	    return (
			<div>
				<LineChart width={1000} height={600} data={finalData} margin={{ top: 50, right: 20, left: 20, bottom: 50 }}>
					<XAxis dataKey="measuredAt" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="heartRate" name="Heart Rate" unit=" bpm" stroke="#1333a5" />
					<Line type="monotone" dataKey="bloodOxygen" name="Blood Oxygen" unit="%" stroke="#13a516" />
					<Line type="monotone" dataKey="pi" name="Pi" stroke="#f47d42" />
				</LineChart>
			</div>
	    );
  }
}

const data = [ 
        {
            "measuredAt" : "2017-02-11T02:09:29.792Z",
            "heartRate" : 65,
            "bloodOxygen" : 99,
            "pi" : 2.45196151733398
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:30.879Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.14053845405579
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:32.003Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.08036851882935
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:33.092Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.30886578559875
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:34.178Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.4336359500885
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:35.303Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.40829563140869
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:36.392Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.67366981506348
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:37.479Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.68349099159241
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:38.604Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.33986759185791
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:39.692Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.72118234634399
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:40.818Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.70307874679565
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:41.905Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.56284236907959
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:42.992Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.775230884552
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:44.118Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.64069557189941
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:45.205Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.10619163513184
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:46.292Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 1.9329674243927
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:47.380Z",
            "heartRate" : 69,
            "bloodOxygen" : 99,
            "pi" : 2.01715278625488
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:48.505Z",
            "heartRate" : 70,
            "bloodOxygen" : 99,
            "pi" : 1.72419691085815
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:49.592Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 2.26522898674011
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:50.680Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.24611711502075
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:51.805Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.04578161239624
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:52.893Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.55508422851562
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:53.980Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 1.84752750396728
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:55.105Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 1.29159367084503
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:56.193Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.52198266983032
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:57.279Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.5
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:58.405Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.62720632553101
        }, 
        {
            "measuredAt" : "2017-02-11T02:09:59.493Z",
            "heartRate" : 72,
            "bloodOxygen" : 98,
            "pi" : 1.64969062805176
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:00.580Z",
            "heartRate" : 72,
            "bloodOxygen" : 98,
            "pi" : 1.30334627628326
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:01.705Z",
            "heartRate" : 72,
            "bloodOxygen" : 98,
            "pi" : 1.43962562084198
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:02.793Z",
            "heartRate" : 72,
            "bloodOxygen" : 98,
            "pi" : 1.17890989780426
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:03.880Z",
            "heartRate" : 72,
            "bloodOxygen" : 98,
            "pi" : 1.5577507019043
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:05.005Z",
            "heartRate" : 65,
            "bloodOxygen" : 98,
            "pi" : 1.49499309062958
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:06.093Z",
            "heartRate" : 65,
            "bloodOxygen" : 98,
            "pi" : 1.93411636352539
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:07.180Z",
            "heartRate" : 67,
            "bloodOxygen" : 98,
            "pi" : 1.46106290817261
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:08.305Z",
            "heartRate" : 67,
            "bloodOxygen" : 98,
            "pi" : 1.03017139434814
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:09.393Z",
            "heartRate" : 67,
            "bloodOxygen" : 98,
            "pi" : 1.989874958992
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:10.519Z",
            "heartRate" : 67,
            "bloodOxygen" : 98,
            "pi" : 2.83296990394592
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:11.606Z",
            "heartRate" : 67,
            "bloodOxygen" : 98,
            "pi" : 2.20630121231079
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:12.693Z",
            "heartRate" : 67,
            "bloodOxygen" : 99,
            "pi" : 2.58657288551331
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:13.819Z",
            "heartRate" : 67,
            "bloodOxygen" : 99,
            "pi" : 2.59616851806641
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:14.905Z",
            "heartRate" : 66,
            "bloodOxygen" : 99,
            "pi" : 2.49513626098633
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:15.993Z",
            "heartRate" : 66,
            "bloodOxygen" : 99,
            "pi" : 2.35755157470703
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:17.119Z",
            "heartRate" : 66,
            "bloodOxygen" : 99,
            "pi" : 3.00098013877869
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:18.206Z",
            "heartRate" : 66,
            "bloodOxygen" : 99,
            "pi" : 2.79642415046692
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:19.294Z",
            "heartRate" : 66,
            "bloodOxygen" : 99,
            "pi" : 2.07061815261841
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:20.420Z",
            "heartRate" : 65,
            "bloodOxygen" : 99,
            "pi" : 1.94776582717896
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:21.506Z",
            "heartRate" : 65,
            "bloodOxygen" : 99,
            "pi" : 2.24649357795715
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:22.594Z",
            "heartRate" : 65,
            "bloodOxygen" : 99,
            "pi" : 1.65987908840179
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:23.719Z",
            "heartRate" : 65,
            "bloodOxygen" : 99,
            "pi" : 1.9033408164978
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:24.806Z",
            "heartRate" : 72,
            "bloodOxygen" : 99,
            "pi" : 2.59652972221375
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:25.893Z",
            "heartRate" : 72,
            "bloodOxygen" : 99,
            "pi" : 2.32820129394531
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:27.056Z",
            "heartRate" : 72,
            "bloodOxygen" : 99,
            "pi" : 2.75881576538086
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:28.106Z",
            "heartRate" : 71,
            "bloodOxygen" : 99,
            "pi" : 1.542236328125
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:29.191Z",
            "heartRate" : 71,
            "bloodOxygen" : 99,
            "pi" : 1.30095934867859
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:30.281Z",
            "heartRate" : 70,
            "bloodOxygen" : 99,
            "pi" : 1.91663110256195
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:31.406Z",
            "heartRate" : 70,
            "bloodOxygen" : 99,
            "pi" : 1.78098678588867
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:32.494Z",
            "heartRate" : 69,
            "bloodOxygen" : 98,
            "pi" : 1.31361436843872
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:33.581Z",
            "heartRate" : 69,
            "bloodOxygen" : 98,
            "pi" : 1.42189717292786
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:34.706Z",
            "heartRate" : 69,
            "bloodOxygen" : 98,
            "pi" : 1.86717236042023
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:35.794Z",
            "heartRate" : 69,
            "bloodOxygen" : 98,
            "pi" : 2.97586274147034
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:36.881Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 3.08909964561462
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:38.006Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 2.69188237190247
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:39.094Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 1.80650115013123
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:40.181Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 2.00320744514465
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:41.306Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 1.84704267978668
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:42.394Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 1.52011835575104
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:43.480Z",
            "heartRate" : 70,
            "bloodOxygen" : 98,
            "pi" : 3.96365451812744
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:44.606Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.61279797554016
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:45.694Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 4.00970935821533
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:46.782Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 2.15875935554504
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:47.906Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 3.87189435958862
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:48.995Z",
            "heartRate" : 71,
            "bloodOxygen" : 98,
            "pi" : 1.54090046882629
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:50.082Z",
            "heartRate" : 64,
            "bloodOxygen" : 98,
            "pi" : 1.31938517093658
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:51.207Z",
            "heartRate" : 64,
            "bloodOxygen" : 97,
            "pi" : 4.00469064712524
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:52.295Z",
            "heartRate" : 64,
            "bloodOxygen" : 97,
            "pi" : 1.89044439792633
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:53.382Z",
            "heartRate" : 59,
            "bloodOxygen" : 97,
            "pi" : 1.85257303714752
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:54.507Z",
            "heartRate" : 59,
            "bloodOxygen" : 97,
            "pi" : 6.47710132598877
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:55.594Z",
            "heartRate" : 63,
            "bloodOxygen" : 97,
            "pi" : 2.22144913673401
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:56.682Z",
            "heartRate" : 63,
            "bloodOxygen" : 97,
            "pi" : 1.45245480537415
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:57.807Z",
            "heartRate" : 63,
            "bloodOxygen" : 97,
            "pi" : 1.45245480537415
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:58.895Z",
            "heartRate" : 64,
            "bloodOxygen" : 97,
            "pi" : 1.83645761013031
        }, 
        {
            "measuredAt" : "2017-02-11T02:10:59.982Z",
            "heartRate" : 64,
            "bloodOxygen" : 97,
            "pi" : 3.96100211143494
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:01.107Z",
            "heartRate" : 64,
            "bloodOxygen" : 97,
            "pi" : 3.96100211143494
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:02.194Z",
            "heartRate" : 56,
            "bloodOxygen" : 97,
            "pi" : 4.03580284118652
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:03.282Z",
            "heartRate" : 56,
            "bloodOxygen" : 97,
            "pi" : 2.26048755645752
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:04.407Z",
            "heartRate" : 54,
            "bloodOxygen" : 97,
            "pi" : 1.94274759292602
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:05.494Z",
            "heartRate" : 54,
            "bloodOxygen" : 97,
            "pi" : 3.31593632698059
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:06.622Z",
            "heartRate" : 54,
            "bloodOxygen" : 97,
            "pi" : 3.31593632698059
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:07.707Z",
            "heartRate" : 47,
            "bloodOxygen" : 96,
            "pi" : 1.69457995891571
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:08.832Z",
            "heartRate" : 47,
            "bloodOxygen" : 96,
            "pi" : 3.03796911239624
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:09.882Z",
            "heartRate" : 47,
            "bloodOxygen" : 96,
            "pi" : 1.46982932090759
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:11.007Z",
            "heartRate" : 47,
            "bloodOxygen" : 96,
            "pi" : 1.46982932090759
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:12.095Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 3.5507493019104
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:13.182Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 3.5507493019104
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:14.308Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 5.0137619972229
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:15.395Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 2.91643667221069
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:16.482Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 2.91643667221069
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:17.645Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 2.91643667221069
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:18.695Z",
            "heartRate" : 46,
            "bloodOxygen" : 97,
            "pi" : 3.1587188243866
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:19.782Z",
            "heartRate" : 49,
            "bloodOxygen" : 98,
            "pi" : 2.05906915664673
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:20.908Z",
            "heartRate" : 49,
            "bloodOxygen" : 98,
            "pi" : 2.05906915664673
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:21.994Z",
            "heartRate" : 49,
            "bloodOxygen" : 98,
            "pi" : 5.47700691223145
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:23.082Z",
            "heartRate" : 49,
            "bloodOxygen" : 98,
            "pi" : 5.47700691223145
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:24.207Z",
            "heartRate" : 49,
            "bloodOxygen" : 98,
            "pi" : 5.47700691223145
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:25.333Z",
            "heartRate" : 49,
            "bloodOxygen" : 98,
            "pi" : 5.47700691223145
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:26.420Z",
            "heartRate" : 42,
            "bloodOxygen" : 98,
            "pi" : 1.4263927936554
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:27.508Z",
            "heartRate" : 42,
            "bloodOxygen" : 98,
            "pi" : 1.4263927936554
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:28.633Z",
            "heartRate" : 42,
            "bloodOxygen" : 98,
            "pi" : 1.02393388748169
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:29.720Z",
            "heartRate" : 42,
            "bloodOxygen" : 98,
            "pi" : 1.00550734996796
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:30.808Z",
            "heartRate" : 42,
            "bloodOxygen" : 98,
            "pi" : 10.9271593093872
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:31.933Z",
            "heartRate" : 42,
            "bloodOxygen" : 98,
            "pi" : 10.9271593093872
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:33.022Z",
            "heartRate" : 44,
            "bloodOxygen" : 98,
            "pi" : 10.7122659683228
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:34.108Z",
            "heartRate" : 44,
            "bloodOxygen" : 98,
            "pi" : 10.7122659683228
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:35.233Z",
            "heartRate" : 44,
            "bloodOxygen" : 98,
            "pi" : 10.7122659683228
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:36.322Z",
            "heartRate" : 44,
            "bloodOxygen" : 98,
            "pi" : 9.72881507873535
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:37.408Z",
            "heartRate" : 44,
            "bloodOxygen" : 98,
            "pi" : 9.72881507873535
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:38.532Z",
            "heartRate" : 44,
            "bloodOxygen" : 98,
            "pi" : 0.777759850025177
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:39.620Z",
            "heartRate" : 46,
            "bloodOxygen" : 98,
            "pi" : 0.881706655025482
        }, 
        {
            "measuredAt" : "2017-02-11T02:11:40.707Z",
            "heartRate" : 46,
            "bloodOxygen" : 98,
            "pi" : 1.78690659999847
        }
    ];

const finalData = data.filter( (val, key) => {
	val.pi = Math.round( val.pi * 100 ) / 100;
	val.measuredAt = moment(val.measuredAt).format('hh:mm:ss');
	return key % 20 === 0;
});