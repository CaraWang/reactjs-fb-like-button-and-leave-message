# Learing Reactjs by building the like button and message box on facebook.

You will practice some reactjs skill in this project...
---

- Concept of component in reactjs.
- Passing parameter from father component to child component by `this.props.xxx`.
- Trigger action in child component by `ref` and `this.refs.xxx`.
- Some lifecycle function of a component in reactjs.

(The `xxx` above means you can name it any name you want.)

File Structure
---

**[In assets]**
- `css` includes one file named `base.css` for all css style code of Facebook template component in this project.
- `data` includes one file named  `fbId.js` for recording Facebook id and simulating a Facebook member sign-in.
- `js` includes one file named `fbPage.js` for importing components and showing to client.
- `js` also includes one directory named `components` for containing all reactjs components of this project.

**[Out of assets]**
- `index.html` is the entrance point and the file to import all files mentioned above. 

Some Advices
---

- You can start a workspace in [cloud 9](http://c9.io) and follow commands:
  - `git clone https://github.com/CaraWang/reactjs-fb-like-button-and- leave-message.git`
  - `mv learning-reactjs-second-demo-communication-between- components/* .`
  - `mv learning-reactjs-second-demo-communication-between- components/.git .`
  - `rm -rf learning-reactjs-second-demo-communication-between- components/`
- Open `index.html` and press the `Run` button in cloud9.
- This project starts working in your cloud9!
- When starting to trace code, you can focus on the `render` function in `fbTemplate.js` which is in *assets/js/components*.
- You can chekout branch to `practice` and start the building trip.
- Have a good time with reactjs! <3
