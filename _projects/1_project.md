---
layout: page
title: I-COS
description: CVPDL Final Project - Leveraging Inpainting to Compensate for Occluded Skeleton
img: assets/img/icos/icos.png
importance: 1
category: course
related_publications: false
---

This work is a method that segments human instances, uses inpainting to reconstruct missing body parts, and refines skeleton predictions. I-COS is a simple but effective pipeline for dealing with occlusions, achieving improvements over the baseline on the challenging OCHuman benchmark.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/icos/baseline.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/icos/result.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The visualization results of I-COS comparing to baseline without inpainting.
</div>



