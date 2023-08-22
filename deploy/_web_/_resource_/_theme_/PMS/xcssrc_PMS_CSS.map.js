(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Grid" :
			{
				"class" :
				{
					"grd_mCombo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"Grid" :
					{
						"class" :
						{
							"grd_mCombo" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				}
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"class" :
										{
											"grd_mCombo" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #ffffff,0px none,1px solid #dddddd"),
														"padding" : nexacro.PaddingObject("3px 10px")
													},
													"mouseover" :
													{
													},
													"selected" :
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		
	};
}
)();
