---
title: Tips for Python Workflow
description: Tl;dr of setting up Python
date:   '2018-01-31'
---

This post will be giving the tl;dr version of setting up Python3, virtual environment and github for any projects you may wish to do on MacOSX.

### Intro to Python3 setup
We will be using Python3 to develop this project. We will need to install a few things to get this working. Just a heads up, there's currently Python2 which has been around a long time and Python3 which is newer. We will use Python3 since Python2 will be phased out sometime soon.

Good [link](http://www.pyladies.com/blog/Get-Your-Mac-Ready-for-Python-Programming/) first of all for more in depth explanation of everything I'm about to write but you can also just scroll down for tl;dr version: 

First, need to install [Homebrew](https://brew.sh/):

Tl;dr, this will allow us to install Python3 and other packages if needed.

To install Python3, just go:
```bash
brew install python3
```

Installing Python3 will automatically install Pip3 as well, which is a package manager for Python3. This will make sure all the libraries you install have all the right dependencies and stuff installed.

---

### Virtual Environments

After pip3, we will need to use Virtual environments. Tl;dr think of these as mini operating systems where you can install Python3 packages for each project you do since one project may need different package versions compared to another one. To download the virtual environment package, go:
```bash
pip3 install virtualenv
```
_Note that sometimes online you will see people using the command pip. This refers to installing things for Python2, so instead replace it with pip3 to get installation for Python3_.


After doing that, we can now create virtual environments! There's a few ways to create venv (virtual environments) but one easy way to get it up and running is to go:

```bash
python3 -m venv name_of_env
```

Here, you can change the name\_of\_env to whatever name you want the environment to be. After doing that, you will see a new directory with the name of the environment. This is your virtual environment. To activate the virtual environment, go:

```bash
source name_of_env/bin/activate
```

Again replace name\_of\_env to whatever name it actually is. You will see your terminal prompt now has the name of your environment in the front of it.

Now you can install any Python3 packages you need. Simply go:

```bash
pip3 install package_name
```

For example, if we want to install [Numpy](http://www.numpy.org/), which is a library used quite frequently for data science work, type:

```bash
pip3 install numpy
```

---

Now sometime we need to make sure that if I use particular packages for a project, that other people know which ones they'll need. We can output the packages we have currently installed in our venv by typing:

```bash
pip3 freeze > requirements.txt
```

If you look now, you will have a requirements.txt file. You can look at what's inside by typing:

```bash
cat requirements.txt
```

It should show you all the packages you have installed. Upload this file to github whenever you have new stuff installed!

When you have finished using the virtual environment, you should deactivate your venv by typing

```bash
deactivate
```

You should also delete your venv directory before pushing to github (more explanation on what this means) since it'll take up unnecessary space since we are uploading unnecessary stuff on github. Do this by:

```bash
rm -rf name_of_env
```

Voila! Should be gone!

So next time you start up some more coding, follow the process in creating a venv like usual:

```bash
python3 -m venv name_of_env
source name_of_env/bin/activate
pip3 install -r requirements.txt
```

What the final line does there is for Pip to read in the requirements.txt file and install all the packages in the requirements file. Now when you check what packages you have:

```bash
pip3 freeze
```

You should have all the packages installed.

---

### Intro to Github
This [youtube series](https://www.youtube.com/watch?v=1h9_cB9mPT8&list=PLqGj3iMvMa4LFz8DZ0t-89twnelpT4Ilw) is really good introduction to Git and Github. Would recommend you guys to watch this.

To get started on Github, open your command line and go to the Github repository. In your command line, you can download Github repositories with the general command.

```bash
git clone github_link
```

For the github_link, go to the main repo, you should see a green button that says clone or download. Click on that and make sure it says "Clone with HTTPS". Copy the link under the link and replace the github_link with it. You should now have cloned the repo. You should have a new directory with all the files of the repository inside.

Whenever you finished some code and want to upload it, first make sure you deleted your virtual environment and outputted packages you used into requirements.txt file. Then, first type:

```bash
git add .
git commit -m "Explanation of stuff you did to the code"
git push
```

And voila! Should be up on Github.
