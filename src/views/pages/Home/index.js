
import HomeSectionOne from "../../components/sections/HomeSectionOne";
import HomeSectionTwo  from "../../components/sections/HomeSectionTwo";
import FloatImage  from "../../components/float/FloatImage";





let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${FloatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;