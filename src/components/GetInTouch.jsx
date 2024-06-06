import { Github, Linkedin, Mail } from 'lucide-react';

const GetInTouch = () => {
  return (
    <div id="getInTouch">
      <div className="w-full h-28"></div>
      <div className="p-[30px] flex justify-center items-center">
        <div className="text-white text-center text-2xl">
          Get in touch, let&apos;s work together!
        </div>
      </div>
      <div className="text-white flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/william-chan-1163b1248/"
          target="blank"
        >
          <Linkedin className="mr-8  cursor-pointer" strokeWidth={1.5} />
        </a>
        <a href="https://github.com/chantaseng" target="blank">
          <Github className="mr-8 cursor-pointer" strokeWidth={1.5} />
        </a>
        <a href="mailto:chan.william.ts@gmail.com">
          <Mail className="mr-8 cursor-pointer" strokeWidth={1.5} />
        </a>
      </div>
      <div className="w-full h-28"></div>
    </div>
  );
};

export default GetInTouch;
