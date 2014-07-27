package com.spun.llewellyn.talks.legacycode.examples.tests;

import org.easymock.EasyMock;
import org.easymock.IExpectationSetters;

public class MockUtils
{

  public static void expectVoid(Object save)
  {
    EasyMock.expect(save).andReturn(0);
  }

  public static void finalizeExpectations(Object... mocks)
  {
    EasyMock.replay(mocks);
  }

  public static <T> T createStrictMock(Class<T> class1)
  {
    return EasyMock.createStrictMock(class1);
  }

  public static <T> IExpectationSetters<T> expect(T o)
  {
    return EasyMock.expect(o);
  }

 
  
}
