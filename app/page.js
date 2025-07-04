import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Shubham Yogesh Jangle</h1>
          <p className="text-lg text-gray-400">
            Robotics Engineer | UCR | ROS | AI/ML | Embedded Systems
          </p>
        </header>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold text-teal-400">About Me</h2>
            <p className="text-gray-300">
              I am a passionate Robotics Engineer currently pursuing my Master’s in
              Robotics at the University of California, Riverside (2024–2026).
              I have a solid foundation in mechanical engineering and experience in AI,
              control systems, and robot perception. I've worked on projects like
              imitation learning for indoor navigation, SLAM-based exploration,
              quadruped robots, and resilient vehicle controllers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold text-teal-400">What I'm Doing</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Robot Perception and Control</li>
              <li>Autonomous Systems R&D (ROS, SLAM, Gazebo, RL)</li>
              <li>Hardware-Software Integration (ESP32, LiDAR, Sensor Fusion)</li>
              <li>Applied AI & ML for Robotics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold text-teal-400">Highlighted Projects</h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong>Imitation Learning for Indoor Robot Navigation</strong>: Learned
                navigation policies from expert demonstrations using behavior cloning.
              </li>
              <li>
                <strong>Spider Robot</strong>: 12-DOF quadruped robot with Python GUI
                and WiFi-based servo control using ESP32-CAM.
              </li>
              <li>
                <strong>Control Model Refinement</strong>: MATLAB/Simulink-based PID
                tuning to improve electric propulsion performance.
              </li>
              <li>
                <strong>Smart Indoor SLAM Robot</strong>: ROS2 Nav2 stack with
                autonomous exploration and LiDAR obstacle avoidance.
              </li>
              <li>
                <strong>Resilient Control for Autonomous Vehicles</strong>: Adaptive
                feedback-based controller with sensor fault tolerance.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold text-teal-400">Skills & Tools</h2>
            <p className="text-gray-300">
              <strong>Languages:</strong> Python, MATLAB, C++, Bash<br />
              <strong>Tools:</strong> ROS, Gazebo, Rviz, Simulink, OpenCV, PyTorch, Git<br />
              <strong>Frameworks:</strong> Nav2, TensorFlow, Scikit-learn<br />
              <strong>Hardware:</strong> ESP32, Arduino, LiDAR, Servo Motors
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
