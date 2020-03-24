import Simple_listviewitemDesign from 'generated/my-components/Simple_listviewitem';

export default class Simple_listviewitem extends Simple_listviewitemDesign {
    pageName: any;
  // Constructor
  constructor(props?: any, pageName?: string) {
		super(props);
		this.pageName = pageName;
	}
};