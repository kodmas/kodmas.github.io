---
layout: page
title: Pupil tracking
description: CV Final
img: assets/img/ganzin/ganzin.png
importance: 1
category: work
---

- **Overview** This project focuses on pupil tracking through image segmentation, aiming to accurately identify pupil locations in eye images. While initially approaching the problem with a standard U-Net architecture, the team developed a robust pipeline utilizing DeepLabv3, advanced data augmentation, and a custom post-processing algorithm to handle challenges such as shadows, eyelashes, and variable camera angles.
- **Technical Approach**
    - **Model Architecture:** Transitioned from U-Net to DeepLabv3 using a ResNet34 encoder pre-trained on ImageNet to improve generalization and convergence speed.Utilized the segmentation-models-pytorch library for implementation.
    - **Data Augmentation:** Employed albumentations for flexible augmentation, including horizontal flips, rotation, Gaussian noise, blur, and brightness/contrast adjustments. Implemented Homography transformation on the training set (S1-S4) to simulate different viewing angles, addressing the lack of angular diversity in the training data compared to the test set
    - **Inference & Thresholding:** Generated probability masks with a lowered threshold of $0.4$ (pixel value $\approx 102$) to capture pupils obscured by shadows, which standard thresholds often missed.

- **Post-Processing Pipeline:** To refine the raw model output, a multi-stage post-processing strategy was applied:
    - **Artifact Removal:** Used Connected Components to eliminate disjointed noise. If multiple components existed, the system tracked the pupil center from the previous frame to select the correct region
    - **Mask Filling:** Developed an iterative dilation method ($15 \times 15$ kernel) to fill gaps caused by eyelashes or reflections. This logic compared pixel intensity against the mask mean to ensure only dark (pupil-like) regions were filled
    - **Edge Smoothing:** Applied a final dilation and erosion sequence ($31 \times 31$ kernel) to smooth jagged edges caused by the filling process
    - **Confidence Scoring:** A binary confidence scoring system (1.0 or 0.0) was implemented based on mask heuristics
        - Score 0.0: Assigned if the mask was on the image edge, had a drastically reduced area compared to the sequence average, or possessed a high average pixel intensity (indicating skin/sclera misclassification).
        - Score 1.0: Assigned to valid masks with an area $> 20$ pixels
  
- **Results:** The proposed method demonstrated significant improvement over the baseline. The final ablation study showed that switching to DeepLabv3 and adding the custom mask filling/confidence scoring raised the public score from approximately 0.76 (U-Net) to 0.93514.
