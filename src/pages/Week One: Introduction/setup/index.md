---
title: "First Dive Into Python and Data Science"
description: First look into Python and Data Science
date: '2018-12-30'
---

# Introduction
### Motivation

The purpose of the ECM is to capture show the short-run dynamics of the variables n the system are influenced by the deviation from the long-run equilibrium. If we are out of equilibrium, then we will move back into the equilibrium, and the model captures this. We difference the data to ensure that any regressions will not be spurious (for reasons mentioned in 1). However, if we just differenced them and regressed them on another, we fail to capture the long-run relationship between the 2 variables that exists (due to the fact they are cointegrated). Hence, we can capture that with the ECM as any time series that is not in equilibrium will move back into equilibrium according to the magnitude of the disequilibrium.

---
### Derivation 


First we begin with 2 I(1) variables that are cointegrated $$y_t$$ and $$z_t$$. From this, we know that we can express it as:

$$\eta_t = y_t - \alpha - \beta z_t$$

We will keep this in mind for later. Now let us define our general model whereby we are looking at the relationship between $$y_t$$ and $$z_t$$ alongside 1 lag.

$$y_t = \alpha_0 + \alpha_1y_{t-1} + \beta_0z_t + \beta_1z_{t-1} + \epsilon_t$$

We note that $$y_t$$ and $$z_t$$ are I(1), so we need to difference them. First we difference $$y_t$$

$$y_t - y_{t-1}= \alpha_0 + \alpha_1y_{t-1} - y_{t-1} + \beta_0z_t + \beta_1z_{t-1} + \epsilon_t$$

$$\Delta y_t = \alpha_0 + (\alpha_1 - 1)y_{t-1} + \beta_0z_t + \beta_1z_{t-1} + \epsilon_t$$

Then we add and subtract $$\beta_0 Z_{t-1}$$ on the RHS to difference it.

$$\Delta y_t = \alpha_0 + (\alpha_1 - 1)y_{t-1} + \beta_0z_t  - \beta_0 z_{t-1} + \beta_0 z_{t-1} + \beta_1z_{t-1} + \epsilon_t$$

$$\Delta y_t = \alpha_0 + (\alpha_1 - 1)y_{t-1} + \beta_0\Delta z_t + \beta_0z_{t-1} + \beta_1z_{t-1} + \epsilon_t$$

We can then do this little trick:

$$\Delta y_t = \alpha_0 - (1 - \alpha_1)y_{t-1} + \beta_0\Delta z_t + \beta_0z_{t-1} + \beta_1z_{t-1} + \epsilon_t$$

$$\Delta y_t = \delta + \beta_0\Delta z_t - (1 - \alpha_1)[y_{t-1} - \frac{\beta_0 + \beta_1}{1 - \alpha_1}z_{t-1} - \alpha) +  \epsilon_t$$

where if you look carefully, I split the $$\alpha_0$$ term up into $$\delta$$ and $$\alpha$$. Note also the term in the bracket is simply $$\eta_{t-1}$$.

$$\Delta y_t = \delta + \beta_0\Delta z_t - (1 - \alpha_1)[\eta_{t-1}] +  \epsilon_t$$

$$\Delta y_t = \delta + \beta_0\Delta z_t + (\alpha_1 - 1)[\eta_{t-1}] +  \epsilon_t$$

We can then redefine some of the variables to match the standard notation.

$$\Delta y_t = \delta + \theta\Delta z_t + \gamma\eta_{t-1} +  \epsilon_t$$

