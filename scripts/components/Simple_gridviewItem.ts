const Simple_gridviewItemDesign = require('library/Simple_gridviewItem');

export default class Simple_gridviewItem extends Simple_gridviewItemDesign {
    pageName: any;
  // Constructor
  constructor(props?: any, pageName?: string) {
		super(props);
		this.pageName = pageName;
	}
};